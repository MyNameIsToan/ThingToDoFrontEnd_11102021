package com.springsecurity01.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="notelist")
@Data
public class NoteEntity{
	
	@Id
	@Column(name="note_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	@Column(name = "parent_id")
	private Long ParentId;
	@Column(name="content")
	private String Content;
	@ManyToOne
    @JoinColumn(name = "users")
    private User users;
}
