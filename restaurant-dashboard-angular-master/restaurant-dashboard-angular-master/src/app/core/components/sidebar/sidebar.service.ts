import { Injectable } from "@angular/core";
@Injectable({ providedIn: "root" })
export class SidebarService {
  private sidebar: any;
  constructor() {}
  public add(sidebar: any): void {
    this.sidebar = sidebar;
  }

  public open(): void {
    this.sidebar.open();
  }
  public close(): void {
    this.sidebar.close();
  }
}