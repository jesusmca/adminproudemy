import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

 @Input('nombre') leyenda: string = 'Leyenda';
 @Input() progreso: number = 50;

 @ViewChild('txtProgress') txtProgress: ElementRef;

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor( ) { 
    // console.log('Leyenda', this.leyenda);
    // console.log('Leyenda', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
  }

  cambiarValor( valor ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
  }

  onChanges( event: number ) {
    if ( event >= 100 ) {
      this.progreso = 100;
    } else if ( event <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = event;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.txtProgress.nativeElement.focus();

    this.cambioValor.emit( this.progreso );

  }

}
