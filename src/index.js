module.exports =
function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++)
    {
        for (let col = 0; col < 9; col++)
        {
            if (matrix[row][col] === 0)
            {
                let variants = getVariants(row, col);
                for (let variant of variants)
                {
                    matrix[row][col] = variant;
                    let step = solveSudoku(matrix);
                    if (step) return step;
                }
                matrix[row][col] = 0;
                return false;
            }
        }
    }
    return matrix;

    function getVariants(row, col)
    {
        let variants = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let result = [];
        let square = {
            row: Math.floor(row / 3) * 3,
            col: Math.floor(col / 3) * 3,
        };

        for (let i = 0; i < 9; i++)
        {
            result.push([matrix[row][i], matrix[i][col], matrix[square.row + i % 3][square.col + Math.floor(i / 3)]])
        }

        variants.filter((value) => !result.includes(value))
        return result;}};
