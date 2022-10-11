import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VolumeService } from 'src/app/services/risk-management/volume.service';

@Component({
  selector: 'app-volume-calculator',
  templateUrl: './volume-calculator.component.html',
  styleUrls: ['./volume-calculator.component.less']
})
export class VolumeCalculatorComponent implements OnInit {
  form: FormGroup = this.fb.group({
    volume: [''],
    volatility_ptc: [''],    
    taker_fee: [''],
    maker_fee: [''],
  });

  constructor(
    private volumeService: VolumeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  getVolumeByRisk() {
      // console.log(this.form.getRawValue());
      this.volumeService.getVolumeByRisk(this.form.value).subscribe(res => {
        // console.log(res);
      });
  }

  updateTable(){

  }
   
}
