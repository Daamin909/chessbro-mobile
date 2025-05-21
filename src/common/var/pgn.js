const pgn = {
  accuracy: {
    black: 0,
    white: 0,
  },
  number_of_move_types: {
    w: {
      best_move: "0",
      blunder: "0",
      book_move: "0",
      excellent: "0",
      good: "0",
      inaccuracy: "0",
      mistake: "0",
    },
    b: {
      best_move: "0",
      blunder: "0",
      book_move: "0",
      excellent: "0",
      good: "0",
      inaccuracy: "0",
      mistake: "0",
    },
  },
  move_evaluations: [
    {
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      opening: "Starting Position",
      eval: {
        type: "cp",
        value: "0.3",
      },
      move_type: null,
      move: null,
    },
  ],
  info: {
    white_player: "White",
    black_player: "Black",
    white_rating: "0",
    black_rating: "0",
  },
};
export default pgn;
