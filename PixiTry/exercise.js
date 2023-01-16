function puzzle(N) {

    A = 1;
    B = 1;
    C = 1;
    D = 1;

    //repeat the loop N times
    for (let i = 0; i < N; i++) {
        X = D + 2 * C + 3 * B + 4 * A;
        A = B;
        B = C;
        C = D;
        D = X;
    }

    return D % 10000000000;

}

document.write(puzzle(10)); 
document.write("<br>");
document.write("<br>");
document.write(puzzle(100));
