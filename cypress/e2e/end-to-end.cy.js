/// <reference types="cypress" />

import { db } from '../../src/data/db';

it('should render rooms', () => {
  cy.visit('/');

  db.rooms.forEach(room => {
    cy.contains(room.title);
  });
});

it('should render movies after selecting a room', () => {
  const room = db.rooms[0];

  cy.visit('/');
  cy.contains(room.title).click();

  room.movies.forEach(movie => {
    cy.contains(movie.title);
  });
});

it('should show a warning when no seat is selected', () => {
  const room = db.rooms[0];
  const movie = room.movies[0];

  cy.visit(`/room/${room.id}/movie/${movie.id}`);
  cy.findByTestId('submit-button').click();

  cy.contains('Please select a seat first');
});

it('should book a seat', () => {
  const room = db.rooms[0];
  const movie = room.movies[0];

  cy.visit(`/room/${room.id}/movie/${movie.id}`);
  cy.findByTestId('seat').first().click();
  cy.findByTestId('submit-button').click();

  cy.contains('The seat is booked now');
});

it('should un-book a seat', () => {
  const room = db.rooms[0];
  const movie = room.movies[0];

  // Book a seat
  cy.visit(`/room/${room.id}/movie/${movie.id}`);
  cy.findByTestId('seat').first().click();
  cy.findByTestId('submit-button').click();

  // Un-book the seat
  cy.findByTestId('seat').first().click();
  cy.findByTestId('submit-button').click();

  cy.contains('The reservation was cancelled');
});
