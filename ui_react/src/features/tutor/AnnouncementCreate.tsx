import { Button, Col, Row, Select, Steps, TimePicker } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addAnnouncementDate,
  Days,
  loadAnnouncementThunk,
  loadSubjectsAsync,
  removeAnnouncementDate,
  selectAnnouncementCreate,
  setDescription,
  setIsAdded,
  setLocation,
  setOrder,
  setPrice,
  setSubject,
  updateAnnouncementDate,
} from "../../app/slice/tutor/AnnouncementCreateSlice";
import { Input } from "antd";
import moment from "moment";
import { Redirect, useRouteMatch } from "react-router";

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
          size="large"
          style={{ width: "100%", margin: "10px 0" }}
          value={state.subjectId}
          placeholder="Select Subject"
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
          size="large"
          style={{ width: "100%", margin: "10px 0" }}
          placeholder="Describe you announcement"
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
          style={{ width: "100%", margin: "10px 0" }}
          size="large"
          placeholder="City or address"
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
              <Row gutter={[16, 16]}>
                <Col>
                  <TimePicker.RangePicker
                    value={[moment(d.startTime), moment(d.endTime)]}
                    onChange={(e) => {
                      if (e && e[0] && e[1])
                        dispatch(
                          updateAnnouncementDate(
                            {
                              ...d,
                              startTime: e[0].toDate().toString(),
                              endTime: e[1].toDate().toString(),
                            },
                            index
                          )
                        );
                    }}
                  />
                </Col>
                <Col>
                  <Select
                    value={d.day}
                    placeholder="Select"
                    onChange={(e) =>
                      dispatch(updateAnnouncementDate({ ...d, day: e }, index))
                    }
                  >
                    {Object.keys(Days)
                      .filter((value) => typeof Days[+value] === "string")
                      .map((day, index) => (
                        <Option value={+day}>{Days[+day]}</Option>
                      ))}
                  </Select>
                </Col>
                <Col>
                  <Button
                    danger
                    onClick={() => dispatch(removeAnnouncementDate(index))}
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
                type="dashed"
                style={{
                  width: "100px",
                  backgroundColor: "green",
                  color: "white",
                  margin: "10px 0",
                }}
                onClick={() =>
                  dispatch(
                    addAnnouncementDate({
                      day: Days.MONDAY,
                      startTime: moment().toString(),
                      endTime: moment().toString(),
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
          placeholder="Enter price please"
          style={{ width: "100%", margin: "10px 0" }}
          size="large"
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

  useEffect(() => {
    return () => {
      dispatch(setIsAdded(false));
    };
  });
  return (
    <>
      {state.isAdded ? <Redirect to={`/announcement`} /> : null}
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
              dispatch(loadAnnouncementThunk());
            }}
          >
            Done
          </Button>
        )}
        {state.order > 0 && (
          <Button
            style={{ margin: "0 8px" }}
            type="primary"
            danger
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default AnnouncementCreate;
