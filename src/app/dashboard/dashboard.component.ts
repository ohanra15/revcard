import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };
  Cards=[];
  JourneyOpenState: boolean = false;
  AccountsOpenState: boolean = true;
  primary ="primary";
  showStatement: boolean = true;
  constructor() {
    // create 100 users
    // const users: IUserData[] = [];
    var usersList:  IStatementData[]  = [
      {
        id:"1",
        description:"STARBUCK STORE",
        category:"FOOD & DRINK",
        amount:"2.54"
      },
      {
        id:"2",
        description:"LUCKY SANTA",
        category:"GROCERIES",
        amount:"4.67"
      },
      {
        id:"3",
        description:"WALL GREENS",
        category:"HEALTH",
        amount:"66.89"
      },
      {
        id:"4",
        description:"AIR INDIA",
        category:"TRAVEL",
        amount:"120.45"
      },
      {
        id:"5",
        description:"UBER TRIP",
        category:"TRAVEL",
        amount:"1.50"
      },
      {
        id:"6",
        description:"BREAKERS",
        category:"FOOD",
        amount:"7.50"
      }
    ];
    // for (let i: number = 1; i <= 100; i++) { /*users.push(createNewUser(i));*/
    //   usersList.push({ "cnt": i, "name": "batr" + i });
    // }


    // assign the data to the data source for the table to render
    this.Cards = [
      {
      "card_name": "CREDIT CARD",
      "card_number": "1234...",
      "card_image": "",
      "card_amount": "$4,500.56"
    },
    // {
    //   "card_name": "CREDIT CARD",
    //   "card_number": "...3492",
    //   "card_image": "",
    //   "card_amount": "$5,500.56"
    // },
    // {
    //   "card_name": "CREDIT CARD",
    //   "card_number": "...4592",
    //   "card_image": "",
    //   "card_amount": "$3,600.76"
    // },
    // {
    //   "card_name": "CREDIT CARD",
    //   "card_number": "...3592",
    //   "card_image": "",
    //   "card_amount": "$8,560.89"
    // }
  ];
  // this.dataSource = new MatTableDataSource(this.Cards);
  this.dataSource = new MatTableDataSource(usersList);
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // this._service.success("nat","dndnnd",this.options);
  }


  displayedColumns = ['id', 'description', 'category', 'amount'];
  dataSource: MatTableDataSource<IStatementData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // remove whitespace
    filterValue = filterValue.toLowerCase(); // datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getStatement() {
    // todo
    this.showStatement = !this.showStatement;
  }

  paperLess() {
    // todo
  }

  transferMoney() {
    // todo
  }
}

export interface IStatementData {
  id: string;
  description: string;
  category: string;
  amount: string;
}