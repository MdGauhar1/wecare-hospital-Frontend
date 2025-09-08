import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalService } from '../../services/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hospital-overview.component.html',
  styleUrls: ['./hospital-overview.component.css']
})
export class HospitalOverviewComponent implements OnInit {
  hospital: any;

  // main.component.ts
departments = [
  { name: "Gynaecological Endoscopy", icon: "fas fa-female" },
  { name: "Pulmonology", icon: "fas fa-lungs" },
  { name: "Vascular & Endovascular Surgery", icon: "fas fa-syringe" },
  { name: "Gastroenterology", icon: "fas fa-stomach" },
  { name: "Cardiothoracic Surgery", icon: "fas fa-heartbeat" },
  { name: "Pediatrics Cardiology", icon: "fas fa-heart" },
  { name: "Maternal-Fetal Medicine", icon: "fas fa-baby" },
  { name: "Pediatrics Nephrology", icon: "fas fa-child" },
  { name: "Pediatrics Surgery", icon: "fas fa-user-md" },
  { name: "Pediatrics Cardiology", icon: "fas fa-heart" },
];









testimonials = [
  {
    quote: `Thank you wEcare Hospital, New Delhi. I really liked the concern showed to me. I liked everything here and the management, the Doctor, the Nurses they were so polite and caring. God Bless this entire Hospital.`,
    author: 'Ms Maria Disha',
    year: 2024
  },
  {
    quote: `wecare made my hotel booking so easy. The app is simple and quick, and I got the best deal. Highly recommend it!`,
    author: 'Rahul Sharma',
    year: 2024
  },
  {
    quote: `I had a wonderful stay booked through wecare. The room was clean, comfortable, and exactly as shown in the app.`,
    author: 'Anjali Mehta',
    year: 2024
  },
  {
    quote: `The wecare support team was very helpful when I had to reschedule my booking. Everything was handled smoothly.`,
    author: 'Arjun Verma',
    year: 2024
  },
  {
    quote: `Thanks to wecare, I found a great hotel near the airport at the last minute. Really convenient service!`,
    author: 'Neha Gupta',
    year: 2024
  },
  {
    quote: `Booking with wecare was a stress-free experience. I trust this app for all my travels now.`,
    author: 'Mohammed Ali',
    year: 2024
  },
  {
    quote: `The Nursing Staff is the best, which I have experienced, they are very Polite and Kind.`,
    author: 'Sarbani',
    year: 2024
  },
  {
    quote: `Thank you for your exceptional care, compassion and dedication. Your kindness and professionalism made a difficult time much easier, and I am truly grateful for everything you have done for my Baby Ms...`,
    author: 'Aadesh Singh F/o Ms. Bhavya Jadon',
    year: 2025
  }
];






  currentSlide = 0;
  itemsPerSlide = 3;

  updateItemsPerSlide() {
    const width = window.innerWidth;
    if (width < 600) {
      this.itemsPerSlide = 1;
    } else if (width < 900) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }

    const maxSlide = this.totalSlides - 1;
    if (this.currentSlide > maxSlide) {
      this.currentSlide = maxSlide;
    }
  }

  get totalSlides(): number {
    return Math.ceil(this.testimonials.length / this.itemsPerSlide);
  }

  get visibleTestimonials() {
    const start = this.currentSlide * this.itemsPerSlide;
    return this.testimonials.slice(start, start + this.itemsPerSlide);
  }

  get slideIndexes(): number[] {
    return Array(this.totalSlides).fill(0).map((_, i) => i);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }














  newsList = [
  'Applications are invited for B.Sc Medical Imaging Technology',
  'Current Openings',
  'Swachh-Award',
  'Swachh Bharat Mission (Bio Gas Plant inauguration)',
  'Awareness Drive on Mental Health and Wellness',
  'Free Health Check-up Camp for Senior Citizens',
  'Workshop on Advanced Cardiac Life Support',
  'International Nurses Day Celebration',
];

recentEvents = [
  {
    title: 'Workshop on Medical Emergency',
    date: '31st Jul 2025',
    image: 'https://media.istockphoto.com/id/614123980/photo/medical-and-donor-concepts.jpg?s=2048x2048&w=is&k=20&c=4Lx7wjJq5X-Qrsb7zShQO9Y1Nbw741QVWulfpbLRuAg='
  },
  {
    title: 'Awareness Program on Cyber Crime',
    date: '29th Mar 2025',
    image: 'https://media.istockphoto.com/id/1455658894/photo/system-hacked-warning-alert-on-notebook-cyber-attack-on-computer-network-virus-spyware.jpg?s=2048x2048&w=is&k=20&c=Np9GhBSzgUM1d3NFxOLY1E94-XkeitDFk3LCOKpg90g='
  },
  {
    title: 'Research Methodology',
    date: '28th Mar 2025',
    image: 'https://cdn.pixabay.com/photo/2017/10/04/09/56/chemist-2815640_1280.jpg'
  }
];













faqs = [
  {
  question: "What services does Wecare Hospitals Delhi offer?",
  answer: "Wecare Hospitals Delhi offers emergency care, diagnostics, outpatient services, surgeries, and preventive health checkups.",
  open: false
},
{
  question: "Does Wecare Hospitals Delhi accept insurance?",
  answer: "Yes, Wecare Hospitals accepts a wide range of health insurance policies from major providers.",
  open: false
},
{
  question: "Does Wecare Hospitals have 24/7 emergency care?",
  answer: "Yes, Wecare Hospitals provides round-the-clock emergency and critical care services.",
  open: false
},
{
  question: "Can I book appointments online at Wecare Hospitals?",
  answer: "Yes, patients can book doctor consultations and diagnostic appointments online through the hospital website or app.",
  open: false
},
{
  question: "Does Wecare Hospitals offer specialty treatments?",
  answer: "Yes, Wecare Hospitals has departments for cardiology, neurology, orthopedics, oncology, pediatrics, and more.",
  open: false
},
{
  question: "Are international patients treated at Wecare Hospitals?",
  answer: "Yes, Wecare Hospitals has a dedicated international patient care desk to assist foreign patients.",
  open: false
},
{
  question: "Does Wecare Hospitals provide pharmacy and diagnostic services?",
  answer: "Yes, Wecare Hospitals has an in-house pharmacy and advanced diagnostic facilities for patients.",
  open: false
}

];

toggleFaq(index: number) {
  this.faqs = this.faqs.map((faq, i) => ({
    ...faq,
    open: i === index ? !faq.open : false
  }));
}










  

  constructor(private service: HospitalService, private router: Router) {}

  ngOnInit() {
    this.service.getOverview().subscribe(data => this.hospital = data);
    this.updateItemsPerSlide();
    window.addEventListener('resize', () => this.updateItemsPerSlide());
  }
  
  goToKnowMore() {
    this.router.navigate(['/know-more']);
  }

   goToBookAppointment() {
    this.router.navigate(['/book-appointment']);
  }
}
