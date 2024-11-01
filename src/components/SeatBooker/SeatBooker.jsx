import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import './SeatBooker.css';

function SeatBooker() {
  const [activeSeat, setActiveSeat] = useState({ row: null, column: null });
  // bookedSeat example: [{ row: 1, column: 2 }, { row: 3, column: 4 }]
  const [bookedSeats, setBookedSeats] = useState([]);
  const { roomId, movieId } = useParams();

  useEffect(() => {
    fetchBookedSeats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasActiveSeat = activeSeat.row !== null && activeSeat.column !== null;

  const ROWS_NUMBER = 10;
  const COLUMNS_NUMBER = 8;
  const LOCAL_STORAGE_BOOKED_SEATS_ID = 'bookedSeats';

  // Fetch booked seats from local storage and put them into 'bookedSeats' state
  const fetchBookedSeats = () => {
    const storageBookedSeats = getBookedSeatsFromLocalStorage();

    const bookedSeatsOfCurrentMovie = storageBookedSeats
      .filter(item => item.roomId === roomId && item.movieId === movieId)
      .map(item => ({ row: item.row, column: item.column }));

    setBookedSeats(bookedSeatsOfCurrentMovie);
  };

  const getBookedSeatsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_BOOKED_SEATS_ID)) || [];
  };

  const setBookedSeatsToLocalStorage = (bookedSeats) => {
    localStorage.setItem(LOCAL_STORAGE_BOOKED_SEATS_ID, JSON.stringify(bookedSeats));
  };

  // Select/deselect a seat
  const handleSeatClick = (row, column) => {
    if (getIsSeatActive(row, column)) {
      resetActiveSeat()
    } else {
      setActiveSeat({ row, column });
    }
  };

  const resetActiveSeat = () => {
    setActiveSeat({ row: null, column: null });
  };

  const getIsSeatActive = (row, column) => {
    return row === activeSeat.row && column === activeSeat.column;
  };

  const getIsSeatBooked = (row, column) => {
    return bookedSeats.some(item => item.row === row && item.column === column);
  };

  // Book a seat and update local storage
  const book = () => {
    const seat = {
      roomId,
      movieId,
      row: activeSeat.row,
      column: activeSeat.column
    };

    const storageBookedSeats = getBookedSeatsFromLocalStorage();
    storageBookedSeats.push(seat);
    setBookedSeatsToLocalStorage(storageBookedSeats);
    toast.success('The seat is booked now');
  };

  // Un-book a seat and update local storage
  const unBook = () => {
    const storageBookedSeats = getBookedSeatsFromLocalStorage();

    const updatedStorageBookedSeats = storageBookedSeats
      .filter(item => (
        item.roomId !== roomId ||
        item.movieId !== movieId ||
        item.row !== activeSeat.row ||
        item.column !== activeSeat.column
      ));

    setBookedSeatsToLocalStorage(updatedStorageBookedSeats);
    toast.success('The reservation was cancelled');
  };

  const submit = () => {
    if (!hasActiveSeat) {
      toast.warn('Please select a seat first');
      return;
    }

    const isSeatBooked = getIsSeatBooked(activeSeat.row, activeSeat.column);

    if (isSeatBooked) {
      unBook();
    } else {
      book();
    }

    fetchBookedSeats();
    resetActiveSeat();
  };

  const renderSubmitButton = () => {
    const isSeatBooked = getIsSeatBooked(activeSeat.row, activeSeat.column);
    const text = isSeatBooked ? 'Cancel Reservation' : 'Book The Seat';

    return (
      <button
        className={`seat-booker__submit-button ${hasActiveSeat ? '' : 'seat-booker__submit-button--disabled'}`}
        onClick={submit}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="seat-booker">
      <div className="seat-booker__seats">
        {[...Array(ROWS_NUMBER)].map((_, row) => (
          [...Array(COLUMNS_NUMBER)].map((_, column) => (
            <div
              key={`${row}_${column}`}
              className={`
                seat-booker__seat
                ${getIsSeatBooked(row, column) ? 'seat-booker__seat--booked' : ''}
                ${getIsSeatActive(row, column) ? 'seat-booker__seat--active' : ''}
              `}
              onClick={() => handleSeatClick(row, column)}
            />
          ))
        ))}
      </div>
      {renderSubmitButton()}
    </div>
  );
}

export default SeatBooker;
