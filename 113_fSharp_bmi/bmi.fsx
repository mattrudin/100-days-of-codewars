let calculateBmi weight height = weight / height ** 2.0

let printResult bmiValue =
    match bmiValue with
    | x when x <= 18.5 -> "Underweight"
    | x when x <= 25.0 -> "Normal"
    | x when x <= 30.0 -> "Overweight"
    | x when x > 30.0 -> "Obese"
    | _ -> "Not defined"

let bmi weight height = calculateBmi weight height |> printResult
