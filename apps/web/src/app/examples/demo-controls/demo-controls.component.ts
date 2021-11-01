import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo-controls',
  templateUrl: './demo-controls.component.html',
  styleUrls: ['./demo-controls.component.scss']
})
export class DemoControlsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private calendar: NgbCalendar
  ) { }

  selectedValue = null;
  multiselectValue = null;
  switcherValue = true;
  dateValue = null;
  today = this.calendar.getToday();
  items = [
    { id: '1', title: 'title_A' },
    { id: '2', title: 'title_B' },
    { id: '3', title: 'title_C' },
    { id: '4', title: 'title_D' },
    { id: '5', title: 'title_E' }
  ];

  ngOnInit(): void {
  }

  //  Methods
  onBtnClick(event: any) {
    console.log('You did something. Here is an event: ', event);
  }

  onTabChange(tab: any) {
    console.log('Tab changed!', tab);
  }

  openModal(content: any) {
    const modalRef = this.modalService.open(content);

    modalRef.result.then(result => {
      console.log(`Closed with: ${result}`);
    }, reason => {
      console.log('reason', reason);
    });
  }

  onSwitcherChange(value: any) {
    console.log('Switcher changed! Value: ', value);
  }

  onDateChange(value: any) {
    console.log('Date changed! Value: ', value);
  }

}
