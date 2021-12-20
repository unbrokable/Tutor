import { Button, Col, Row, Table } from "antd";
import { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  loadRemovedUsersAsync,
  loadUsersAsync,
  recoveUserAsync,
  removeUserAsync,
  selectUsers,
  setshowUsers,
} from "../../app/slice/admin/usersSlice";
import UserAdd from "./UserAdd";

const Users = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectUsers);
  const history = useHistory();
  const { path } = useRouteMatch();

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "First name",
      dataIndex: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    state.showUsers
      ? {
          title: "",
          render: (row: any) => {
            return (
              <>
                <Button
                  onClick={() => {
                    dispatch(removeUserAsync(row.id));
                  }}
                >
                  Remove
                </Button>
              </>
            );
          },
        }
      : {
          title: "",
          render: (row: any) => {
            return (
              <>
                <Button
                  onClick={() => {
                    dispatch(recoveUserAsync(row.id));
                  }}
                >
                  Recover
                </Button>
              </>
            );
          },
        },
  ];

  useEffect(() => {
    if (!state.users) {
      dispatch(loadUsersAsync());
    }
  }, [dispatch, state.users]);

  useEffect(() => {
    if (!state.removedUser) {
      dispatch(loadRemovedUsersAsync());
    }
  }, [dispatch, state.removedUser]);

  return (
    <>
      <Switch>
        <Route exact path={`${path}/add`}>
          <UserAdd />
        </Route>
      </Switch>
      <Row>
        <Col>
          <Button onClick={() => dispatch(setshowUsers(true))}>Users</Button>
        </Col>
        <Col>
          <Button onClick={() => dispatch(setshowUsers(false))}>
            Removed users
          </Button>
        </Col>
      </Row>

      <Table
        dataSource={(state.showUsers ? state.users : state.removedUser) ?? []}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <Button type="primary" onClick={() => history.push(`${path}/add`)}>
        Add
      </Button>
    </>
  );
};

export default Users;
