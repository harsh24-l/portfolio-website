'use strict';

const toggle = (element) => element.classList.toggle('active');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');

sidebarButton?.addEventListener('click', () => toggle(sidebar));

const filterItems = document.querySelectorAll('[data-filter-item]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const select = document.querySelector('[data-select]');
const selectValue = document.querySelector('[data-selecct-value]');
const selectItems = document.querySelectorAll('[data-select-item]');

const filterProjects = (category) => {
  filterItems.forEach((item) => {
    item.classList.toggle('active', category === 'all' || item.dataset.category === category);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    filterProjects(button.textContent.toLowerCase());
    if (selectValue) selectValue.textContent = button.textContent;
  });
});

select?.addEventListener('click', () => toggle(select));
selectItems.forEach((item) => {
  item.addEventListener('click', () => {
    const category = item.textContent.toLowerCase();
    if (selectValue) selectValue.textContent = item.textContent;
    filterProjects(category);
    toggle(select);
  });
});

const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const pageName = link.textContent.toLowerCase();
    pages.forEach((page) => page.classList.toggle('active', page.dataset.page === pageName));
    navigationLinks.forEach((item) => item.classList.toggle('active', item === link));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
