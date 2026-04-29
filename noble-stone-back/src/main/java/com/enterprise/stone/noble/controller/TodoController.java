package com.enterprise.stone.noble.controller;

import java.util.ArrayList;
import java.util.List;

import com.enterprise.stone.noble.controller.helpers.response.ItemResponse;
import com.enterprise.stone.noble.entities.Item;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enterprise.stone.noble.controller.helpers.request.QuoteRequest;
import com.enterprise.stone.noble.controller.helpers.request.TodoRequest;
import com.enterprise.stone.noble.controller.helpers.response.PhotoResponse;
import com.enterprise.stone.noble.controller.helpers.response.QuoteResponse;
import com.enterprise.stone.noble.controller.helpers.response.TodoResponse;
import com.enterprise.stone.noble.entities.Quote;
import com.enterprise.stone.noble.entities.Todo;
import com.enterprise.stone.noble.services.TodoService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @PostMapping("/savetodo")
    public ResponseEntity<TodoResponse> saveTodo(@RequestBody TodoRequest todoRequest) {

        var todo = Todo.builder()
                .Id(todoRequest.getId())
                .done(todoRequest.isDone())
                .todoDescription(todoRequest.getTodoDescription())
                .todoTitle(todoRequest.getTodoTitle())
                .build();

        var savedtodo = todoService.saveTodo(todo);

        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @PostMapping("/removeTodo")
    public ResponseEntity<TodoResponse> removeTodo(@RequestBody TodoRequest todoRequest) {
        var todo = Todo.builder()
                .Id(todoRequest.getId()).build();
        todoService.removeTodo(todo);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/getalltodos")
    public ResponseEntity<List<TodoResponse>> getMethodName() {
        List<TodoResponse> todosResponse = new ArrayList<>();
        var todos = todoService.getAllTodo();

        for (Todo todo : todos) {
            var task = TodoResponse.builder()
                    .Id(todo.getId())
                    .done(todo.isDone())
                    .todoDescription(todo.getTodoDescription())
                    .todoTitle(todo.getTodoTitle())
                    .build();
            todosResponse.add(task);
        }



        return ResponseEntity.ok(todosResponse);
    }

    public ResponseEntity<List<TodoRequest>> getAllTodos() {
        return new ResponseEntity<>(null, HttpStatus.ACCEPTED);
    }

    public ResponseEntity<List<TodoResponse>> getAllTodosByUserId() {
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    public ResponseEntity<TodoResponse> updateTodo(TodoRequest todoRequest) {

        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
