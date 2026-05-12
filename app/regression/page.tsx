import Navbar from "@/components/Navbar";
import CodeBlockThemed from "@/components/CodeBlockThemed";
const code = `import numpy as np
import matplotlib.pyplot as plt

from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.datasets import fetch_california_housing

# 1. Load dataset
data = fetch_california_housing(as_frame=True)

# 2. Input and output
X = data.data[['AveRooms']]
y = data.target

# 3. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# ---------------- LINEAR REGRESSION ----------------

linear_model = LinearRegression()

linear_model.fit(X_train, y_train)

y_pred_linear = linear_model.predict(X_test)

# ---------------- POLYNOMIAL REGRESSION ----------------

poly = PolynomialFeatures(degree=3)

X_train_poly = poly.fit_transform(X_train)

poly_model = LinearRegression()

poly_model.fit(X_train_poly, y_train)

X_test_poly = poly.fit_transform(X_test)

y_pred_poly = poly_model.predict(X_test_poly)

# ---------------- PLOT ----------------

plt.subplot(1,2,1)

plt.scatter(X_test, y_test, color='blue')
plt.plot(X_test, y_pred_linear, color='red')

plt.title("Linear Regression")

plt.subplot(1,2,2)

plt.scatter(X_test, y_test, color='blue')
plt.plot(X_test, y_pred_poly, color='green')

plt.title("Polynomial Regression")

plt.tight_layout()
plt.show()

# ---------------- ERROR ----------------

linear_mse = mean_squared_error(y_test, y_pred_linear)

poly_mse = mean_squared_error(y_test, y_pred_poly)

print("Linear MSE:", linear_mse)
print("Polynomial MSE:", poly_mse)
`;

export default function Page() {
  return (
    <div className="p-10">
      <Navbar />

      <h1 className="text-4xl font-bold mb-5 mt-10">Linear & Polynomial Regression</h1>

      <CodeBlockThemed code={code} language="Python" />
    </div>
  );
}
