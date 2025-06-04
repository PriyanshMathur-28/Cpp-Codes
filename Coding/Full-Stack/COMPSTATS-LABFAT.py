import statsmodels.api as sm
import pandas as pd

# Data from the table
data = {
    'Hours': [1, 2, 2, 4, 2, 1, 5, 4, 2, 4, 4, 3, 6, 5, 3, 4, 6, 2, 1, 2],
    'Exams': [1, 3, 3, 5, 2, 2, 1, 1, 0, 3, 4, 3, 2, 4, 4, 4, 5, 1, 0, 1],
    'Score': [76, 78, 85, 88, 72, 69, 94, 94, 88, 92, 90, 75, 96, 90, 82, 85, 99, 83, 62, 76]
}

df = pd.DataFrame(data)

y = df["Score"]
x = df[["Hours", "Exams"]]
x = sm.add_constant(x)

model = sm.OLS(y, x).fit()
print(model.summary())