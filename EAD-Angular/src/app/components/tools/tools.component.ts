import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { startWith, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent implements OnInit {

  title: string = 'Pipeline';

  loading = false;
  repos: any[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      versionControl: [''],
      repos: [{ value: '', disabled: true }],
      language: [{ value: '', disabled: true }],
      environment: [{ value: '', disabled: true }]
    });

    this.form.get('versionControl').valueChanges.pipe(
      startWith(''),
      switchMap(([prev, curr]) => {
        if (curr && curr !== prev) {
          this.loading = true;
          this.repos = [];
          
        this.form.get('repos').reset({ value: '', disabled: true });
        this.form.get('language').reset({ value: '', disabled: true });
        this.form.get('environment').reset({ value: '', disabled: true });
          return this.http.get(`api/v1/pipelines/repos`);
        } else {
          this.loading = false;
          return of([]);
        }
      })
    ).subscribe(data => {
      if (data && data.length > 0) {
        this.repos = data;
        this.form.get('repos').enable();
      } else {
        this.form.get('repos').disable();
      }
      this.loading = false;
    });
    this.enableNextField('repos', 'language');
    this.enableNextField('language', 'environment');
  
  }
  enableNextField(currentField: string, nextField: string) {
    this.form.get(currentField).valueChanges.subscribe(value => {
      if (value) {
        this.form.get(nextField).reset({ value: '', disabled: true });
        this.form.get(nextField).enable();
      } else {
        this.form.get(nextField).disable();
      }
    });
  }

  pipelineObj: any = {
    "versionControl": "",
    "language": "",
    "environment": ''
  }

  pipelineData: any = {
    "version-control": ["Azure", "Jenkins", "GitHub"],
    "language": ["node.js", ".net"],
    "environment": ["dev", "devInt"]
  }

  setVersionControl(event) {

  }

  setLanguage(event) {

  }

  setEnvironment(event) {

  }
  submitRequest() {
    console.log(`${this.form.get("versionControl").value} | ${this.form.get("repos").value.name} | ${this.form.get("language").value} | ${this.form.get("environment").value} `);

  }

}
