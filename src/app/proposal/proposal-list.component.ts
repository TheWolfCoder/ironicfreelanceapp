import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, '123 Company', 'http://stephan.brown.herokuapp.com', 'Ruby on Rails', 150, 120, 15, 'stephan.r.brown@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'Newest Company', 'http://www.foxwood.com', 'Angular 2', 125, 100, 9, 'speedwolf0@gmail.com')
  proposalThree: Proposal = new Proposal(3333, 'Its a Company', 'http://www.binky.com', 'Iconic 2', 150, 120, 15, 'stephan.re.brown@gmail.com')
 
  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree] 
}