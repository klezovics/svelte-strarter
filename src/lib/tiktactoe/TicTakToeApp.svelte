<script>
    let nextToMove = 'X';
    let winner = null;

    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];


    const move = (i, j) => {
        if (board[i][j] === '') {
            board[i][j] = nextToMove;
            nextToMove = nextToMove === 'X' ? 'O' : 'X';
        }
        checkWinner(board)
    }

    const checkWinner = (board) => {
        // Check rows for winner
        for (let row = 0; row < 3; row++) {
            if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
                winner = board[row][0];
            }
        }

        //TODO Check columns for winner
        for (let col = 0; col < 3; col++) {
            if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
                winner = board[0][col];
            }
        }
        //TODO Check diagonals for winner
        if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            winner = board[0][0];
        }
    }
</script>

<div>
    <h1>Tic-tac-toe game</h1>

    {#if winner}
        <h2>Winner is {winner}</h2>
    {:else}
        <h2>Next to move {nextToMove}</h2>
    {/if}

    {#each board as row, i}
        <div class="row">
            {#each row as cell, j}
                <div class="cell" on:click={() => move(i, j)}>{cell}</div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .row {
        display: flex;
    }

    .cell {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>