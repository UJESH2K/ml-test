import Navbar from "@/components/Navbar";
import CodeBlockThemed from "@/components/CodeBlockThemed";
const code = `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# 1. Load dataset
data = load_breast_cancer()

X = data.data
y = data.target

# 2. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# 3. Create model
model = DecisionTreeClassifier(random_state=42)

# 4. Train model
model.fit(X_train, y_train)

# 5. Predict
y_pred = model.predict(X_test)

# 6. Accuracy
acc = accuracy_score(y_test, y_pred)

print("Accuracy:", acc)

# 7. New sample prediction
sample = X_test[0].reshape(1, -1)

result = model.predict(sample)

# 8. Output class
if result == 1:
    print("Benign")
else:
    print("Malignant")
`;

export default function Page() {
  return (
    <div className="p-10">
      <Navbar />

      <h1 className="text-4xl font-bold mb-5 mt-10">Decision Tree</h1>

      <CodeBlockThemed code={code} language="Python" />
    </div>
  );
}
