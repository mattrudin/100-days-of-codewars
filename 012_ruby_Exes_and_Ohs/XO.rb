# origin: https://www.codewars.com/kata/55908aad6620c066bc00002a
def XO(str)
    x = str.split("").count("x") + str.split("").count("X")
    o = str.split("").count("o") + str.split("").count("O")
    x == o ? true : false
  end

# alternative solution
def XO(str)
    str.count('Xx') == str.count('oO')
  end