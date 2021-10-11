import { HttpClient } from '@angular/common/http';
import { ShareDataService } from './../../c_service/ShareData.service';
import { NoteService } from './../../c_service/Note.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Notes } from 'src/app/common/Notes';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ShowToDoList',
  templateUrl: './ShowToDoList.component.html',
  styleUrls: ['./ShowToDoList.component.css']
})
export class ShowToDoListComponent implements OnInit {
  Condition = "0";
  IsHidden = true;
  IsHideChild = true;
  IsHiddenAddNew = true;
  ParentID!:bigint;
  ConditionShow!:bigint;
  TypeProcess = 'Show Child';
  ListOfNote !: Notes[];
  ID!: bigint;
  NoteForm!: FormGroup;

  constructor(private NoteService : NoteService, private router : Router, private ShareDataService: ShareDataService, private HttpClient : HttpClient) {
    this.NoteForm = new FormGroup({
      'Content': new FormControl(null,Validators.required)
    })
  }

  ngOnInit() {
    this.GetAll();
  }

  GetAll(){
    this.NoteService.GetAll().subscribe(data=>{
      this.ListOfNote = data as Notes[];
    });
  }

  RemoveNote(NoteID : bigint){
    this.ID = NoteID;
    this.IsHidden = false;
  }

  EditNote(NoteID: bigint, NoteContent : string){
    this.ShareDataService.SharedID = NoteID.toString();
    this.ShareDataService.SharedContent = NoteContent;
    this.router.navigate(['/UpdateNote/' + NoteID]);
  }

  Cancel(){
    this.IsHidden = true;
  }

  Remove(){
    this.NoteService.RemoveNote(this.ID).subscribe();
    this.IsHidden = true;
    window.location.reload();
  }

  CancelAdd(){
    this.IsHiddenAddNew = true;
  }

  AddNew(){
    this.IsHiddenAddNew = false;
  }

  OnSubmit(){
    if(this.NoteForm.invalid){
      console.log('invalid');
      return;
    }
    this.SaveNote();
  }

  SaveNote(){
      var note = new Notes();
      note.content = this.NoteForm.controls['Content'].value;
      this.NoteService.SaveNote(note).subscribe(data=>{
        console.log(note);
        this.IsHiddenAddNew = true;
        //window.location.reload();
      });
  }

  ShowChild(NoteID: bigint){
    this.ParentID = NoteID;
    this.IsHideChild = !this.IsHideChild;
  }
}
