let checkCentury year =
    match year with
    | x when x % 100 = 0 -> true
    | _ -> false

let extractCentury year = year / 100

let addOne num = num + 1

let century year =
    match checkCentury year with
    | true -> extractCentury year
    | false -> extractCentury year |> addOne
