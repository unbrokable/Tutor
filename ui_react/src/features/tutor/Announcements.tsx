import { Button, Card, Row } from "antd";
import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  loadAnnouncementsAsync,
  selectAnnouncements,
} from "../../app/slice/tutor/AnnouncementsSlice";

const Announcements = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { path } = useRouteMatch();
  const state = useAppSelector(selectAnnouncements);
  useEffect(() => {
    if (!state.announcements) {
      dispatch(loadAnnouncementsAsync());
    }
  }, [dispatch, state]);
  return (
    <>
      <Row>
        <Button onClick={() => history.push(path + "add")}>
          Add new announcement
        </Button>
      </Row>
      {state.announcements?.map((a) => (
        <Card
          style={{ margin: "10px" }}
          title={"Announcement id" + a.id}
          bordered={false}
        >
          <h3>{a.user}</h3>
          <p>{a.description}</p>
          <p>Price: {a.price}</p>
        </Card>
      ))}
    </>
  );
};

export default Announcements;
