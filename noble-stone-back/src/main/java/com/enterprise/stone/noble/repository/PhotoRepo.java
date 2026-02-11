package com.enterprise.stone.noble.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.enterprise.stone.noble.entities.Photo;

@Repository
public interface PhotoRepo extends JpaRepository<Photo, Long> {

}
