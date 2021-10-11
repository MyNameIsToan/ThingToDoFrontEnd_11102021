package com.springsecurity01.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.springsecurity01.dto.NoteDTO;

public interface INoteService {
	List<NoteDTO>findAll(Pageable pageable);
	List<NoteDTO>findByUser(String username);
	List<NoteDTO> GetAll();
	void Save(NoteDTO note);
	void Update(NoteDTO note);
	void Delete(Long id);
	int totalItem();
}
