# origin: https://www.codewars.com/kata/56269eb78ad2e4ced1000013

def find_next_square(number)
    next_square_root = Math.sqrt(number) + 1
    if next_square_root % 1 == 0
      next_square = next_square_root * next_square_root
    else
      -1
    end
  end

  # alternative solution:
  def find_next_square(sq)
    number = Math.sqrt(sq) + 1
    number % 1 == 0 ? number**2 : -1
  end