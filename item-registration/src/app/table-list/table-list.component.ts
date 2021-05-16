import { Component, OnInit } from '@angular/core';
import { RecordService } from '../services/records.service';
import { Records } from '../models/records';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  
  record = {} as Records;
  records: Records[] | undefined;

  constructor(private recordService: RecordService) {}
  
  ngOnInit() {
    this.getRecord();
  }

  // defini se um record será criado ou atualizado
  saveRecord(form: NgForm) {
    if (this.record.id !== undefined) {
      this.recordService.updateRecord(this.record).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.recordService.saveRecord(this.record).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os record
  getRecord() {
    this.recordService.getRecord().subscribe((records: Records[]) => {
      this.records = records;
    });
  }

  // deleta um record
  deleteRecord(record: Records) {
    this.recordService.deleteRecord(record).subscribe(() => {
      this.getRecord();
    });
  }

  // copia um record para ser editado.
  editRecord(record: Records) {
    this.record = { ...record };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getRecord();
    form.resetForm();
    this.record = {} as Records;
  }

}


