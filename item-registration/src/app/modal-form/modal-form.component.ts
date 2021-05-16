import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Records } from '../models/records';
import { RecordService } from '../services/records.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {

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

