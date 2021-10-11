package com.springsecurity01.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springsecurity01.entity.NoteEntity;

public interface NoteRepository extends JpaRepository<NoteEntity, Long> {
	List<NoteEntity> findByUsers(String username);
}
