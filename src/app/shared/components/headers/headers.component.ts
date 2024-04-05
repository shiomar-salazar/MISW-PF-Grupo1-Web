import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.scss'
})
export class HeadersComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService) { }

  isLoggedIn() {
    if (sessionStorage.getItem('username') !== null) {
      return true;
    }
    return false;
  };

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('rol');
    this.toastr.success('Confirmation', 'Se cerró sesión correctamente', { closeButton: true });
    this.router.navigate(['/'])
  }

  changeLanguage(language: string): void {
    const currentPath = this.router.url;
    if (!currentPath.includes(`/${language}/`)) {
      const  newPath = `/${language}${currentPath}`;
      window.location.href = newPath
    }
  }

  ngOnInit(): void { }

}
