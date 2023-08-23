import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  public width = 320;
  public x = 100;
  public oldX = 0;
  public grabber = false;
  @Input() title = "";
  private element: any;

  constructor(private sidebarService: SidebarService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
      return;
    }
    this.resizer(event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  @HostListener("document:mouseup", ["$event"])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }

  @HostListener("document:mousedown", ["$event"])
  onMouseDown(event: any) {
    if (event.target.className === "sidebar__grabber") {
      this.grabber = true;
      this.oldX = event.clientX;
    }
  }

  ngOnInit() {
    const sidebar = this;

    if (localStorage.getItem("sidebar_width") === null) {
      localStorage.setItem("sidebar_width", this.width.toString());
    } else {
      this.width = parseInt(localStorage.getItem("sidebar_width")!, 10);
      const browserWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
      if (this.width > browserWidth) {
        this.width = browserWidth;
        this.setSidebarWidth(this.width);
      }
    }

    document.body.appendChild(this.element);

    this.element.addEventListener("click", function (e: any) {
      if (e.target.className === "sidebar__overlay") {
        sidebar.close();
      }
    });
    const sidebarComponentData = {
      open: function () {
        sidebar.open();
      },
      close: function () {
        sidebar.close();
      },
    };
    this.sidebarService.add(sidebarComponentData);
  }
  
  ngOnDestroy() {
    this.element.remove();
  }

  private resizer(offsetX: number) {
    this.width -= offsetX;
    this.setSidebarWidth(this.width);
  }

  private setSidebarWidth(width: number) {
    localStorage.setItem("sidebar_width", width.toString());
  }

  public open(): void {
    this.element.classList.add("sidebar__open");
  }

  public close(): void {
    this.element.classList.remove("sidebar__open");
  }

}
