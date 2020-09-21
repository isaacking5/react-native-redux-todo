import axios from "axios";
import qs from "qs";

const baseUrl = "http://localhost:3000";

// axios config options
const options = {
  baseURL: baseUrl,
  timeout: 10000,
  paramsSerializer: (params) => qs.stringify(params),
};

const AxiosInstance = axios.create(options);

export async function getTodos(fetchTodosRequest, fetchTodosFailure) {
  fetchTodosRequest();
  return await AxiosInstance.get(
    `https://5ecf536d16017c00165e2996.mockapi.io/api/v1/todos/`
  )
    .then((res) => {
      if (res.data) {
        const result = res.data.map((item) => ({
          id: item._id,
          text: item.todo,
          isDone: false,
          isEditing: false,
          isStarred: false,
        }));
        return result.reverse();
      }
    })
    .catch((error) => {
      fetchTodosFailure(error.message);
    });
}

export async function postTodo(params) {
  const res = await AxiosInstance.post(`/`, params);
  if (res.data && res.data.document) {
    const document = res.data.document;
    return {
      text: document.todo,
      id: document._id,
      isDone: false,
      isEditing: false,
      isStarred: false,
    };
  }
  return;
}

export async function putTodo(id, params) {
  const res = await AxiosInstance.put(`/${id}`, params);
  if (res.data && res.data.value) {
    const value = res.data.value;
    return {
      text: value.todo,
      id: value._id,
      isDone: false,
      isEditing: false,
      isStarred: false,
    };
  }
  return;
}

export function deleteTodo(id) {
  return AxiosInstance.delete(`/${id}`);
}
