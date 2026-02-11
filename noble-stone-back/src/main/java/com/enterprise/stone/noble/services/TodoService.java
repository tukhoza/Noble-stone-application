package com.enterprise.stone.noble.services;

import org.springframework.stereotype.Service;

import com.enterprise.stone.noble.entities.Todo;
import com.enterprise.stone.noble.repository.TodoRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepo todoRepo;

    public Todo saveTodo(Todo todo) {
        return todoRepo.save(todo);
    }

    public Todo updateTodo(Todo todo) {
        return todoRepo.save(todo);
    }

    public Iterable<Todo> getAllTodo() {
        return todoRepo.findAll();
    }

    public void removeTodo(Todo todo) {
         todoRepo.deleteById(todo.getId());
    }

    public Iterable<Todo> getAllByUserId(Long id) {
        return null;
    }
}
