export default class Game {
  score = 0;
  lines = 0;
  level = 0;
  playfield = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  activePieceX = 0;
  activePieceY = 0;
  activePiece = {
    x: 0,
    y: 0,
    blocks: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };

  movePieceLeft() {
    this.activePiece.x -= 1;

    if (this.ifPieceOutOfBounds()) {
      this.activePiece.x += 1;
    }
  }

  movePieceRight() {
    this.activePiece.x += 1;

    if (this.ifPieceOutOfBounds()) {
      this.activePiece.x -= 1;
    }
  }

  movePieceDown() {
    this.activePiece.y += 1;

    if (this.ifPieceOutOfBounds()) {
      this.activePiece.y -= 1;
    }
  }

  ifPieceOutOfBounds() {
    const playfield = this.playfield;
    const { x, y } = this.activePiece;
    return playfield[y] === undefined || playfield[y][x] === undefined;
  }

  lockPiece() {
    const { x: pieceX, y: pieceY, blocks } = this.activePiece;

    for (let y = 0; y < block.length; y++) {
      for (let x = 0; x < block[y].length; x++) {
        this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
      }
    }
  }
}
