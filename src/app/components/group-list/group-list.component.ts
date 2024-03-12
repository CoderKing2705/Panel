import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GroupListService } from '../../services/groupList/group-list.service';
import { MatTableDataSource } from '@angular/material/table';

export interface BusinessGroupList {
  businessGroupName: string;
  industryType: string;
  packageType: string;
  countLocations: number;
}

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css'
})


export class GroupListComponent implements OnInit {

  dataSource: MatTableDataSource<BusinessGroupList>;
  displayedColumns: string[] = ['businessGroupName','industryType','packageTypeName','countLocations'];
  
  constructor(private route: Router, private _getList: GroupListService) { }
  ngOnInit() {
    this._getList.GetBusinessGroups().subscribe(
      (data) => {
        console.log(data);
        this.dataSource = data;
      },
    )
  }

  exitPage() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['login']);
  }
}
