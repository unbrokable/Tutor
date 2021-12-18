import { Button, Col, Row, Select, Steps, TimePicker } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addAnnouncementAsync,
  addAnnouncementDate,
  Days,
  loadSubjectsAsync,
  removeAnnouncementDate,
  selectAnnouncementCreate,
  setDescription,
  setLocation,
  setOrder,
  setPrice,
  setSubject,
  updateAnnouncementDate,
} from "../../app/slice/tutor/AnnouncementCreateSlice";
import { Input } from "antd";
import moment from "moment";

const { TextArea } = Input;
const { Step } = Steps;
const { Option } = Select;

const AnnouncementCreate = () => {
  const state = useAppSelector(selectAnnouncementCreate);
  const steps = [
    {
      title: "Choose subject",
      content: (
        <Select
          value={state.subjectId}
          placeholder="Select"
          onChange={(e) => dispatch(setSubject(e))}
        >
          {state.subjects?.map((subj) => (
            <Option value={subj.id}>{subj.name}</Option>
          ))}
        </Select>
      ),
    },
    {
      title: "Description",
      content: (
        <TextArea
          value={state.description}
          rows={4}
          onChange={(e) => dispatch(setDescription(e.target.value))}
        />
      ),
    },
    {
      title: "Location",
      content: (
        <Input
          value={state.location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
      ),
    },
    {
      title: "ChooseDate",
      content: (
        <>
          {state.dates?.map((d, index) => {
            return (
              <Row>
                <Col>Day: {Days[d.day!]}</Col>
                <Col>
                  <TimePicker.RangePicker
                    defaultValue={[moment(d.startTime), moment(d.endTime)]}
                    onChange={(e) => {
                      dispatch(
                        updateAnnouncementDate(
                          {
                            ...d,
                            startTime: e![0]!.toDate().toString(),
                            endTime: e![1]!.toDate().toString(),
                          },
                          index
                        )
                      );
                    }}
                  />
                </Col>
                <Select
                  value={d.day}
                  placeholder="Select"
                  onChange={(e) =>
                    dispatch(updateAnnouncementDate({ ...d, day: e }, index))
                  }
                >
                  {Object.keys(Days).map((day, index) => (
                    <Option value={Days[index]}>{day}</Option>
                  ))}
                </Select>
                <Col>
                  <Button
                    onChange={() => dispatch(removeAnnouncementDate(index))}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            );
          })}

          <Row>
            <Col>
              <Button
                onClick={() =>
                  dispatch(
                    addAnnouncementDate({
                      day: Days.MONDAY,
                      startTime: Date.now.toString(),
                      endTime: Date.now.toString(),
                    })
                  )
                }
              >
                Add
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "Price",
      content: (
        <Input
          type={"number"}
          value={state.price}
          onChange={(e) => dispatch(setPrice(+e.target.value))}
        />
      ),
    },
  ];
  const dispatch = useAppDispatch();
  const next = () => {
    dispatch(setOrder(state.order + 1));
  };

  const prev = () => {
    dispatch(setOrder(state.order - 1));
  };

  useEffect(() => {
    if (!state.subjects) {
      dispatch(loadSubjectsAsync());
    }
  }, [state.subjects, dispatch]);
  return (
    <>
      <Steps current={state.order}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[state.order].content}</div>
      <div className="steps-action">
        {state.order < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {state.order === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              dispatch(addAnnouncementAsync(state));
            }}
          >
            Done
          </Button>
        )}
        {state.order > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default AnnouncementCreate;
