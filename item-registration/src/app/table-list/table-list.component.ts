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

  // obtém todos os record
  getRecord() {
    this.recordService.getRecord().subscribe((records: Records[]) => {
      this.records = records;
    });
  }
    // copia o carro para ser editado.
    editRecord(record: Records) {
      this.record = { ...record };
    }

  // deleta um record
  deleteRecord(record: Records) {
    this.recordService.deleteRecord(record).subscribe(() => {
      this.getRecord();
    });
  }

}


