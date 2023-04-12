import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  exchanges: any;
  apiError: boolean = false;
  loading: boolean = false;
  isVisible: boolean = false;
  constructor(
    private cryptoService: CryptoService,
  ) { }

  ngOnInit(): void {
  }
}