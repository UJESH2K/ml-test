import Navbar from "@/components/Navbar";
import CodeBlockThemed from "@/components/CodeBlockThemed";
const code = `# Removed: This cell is no longer needed as the dataset is loaded directly using scikit-learn.

import numpy as np

# Removed: from scipy.io import loadmat
from sklearn.datasets import fetch_olivetti_faces

from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 1. Load dataset
data = fetch_olivetti_faces()

# 2. Get features
X = data.data # Data is already in (n_samples, n_features) format

# 3. Create labels
y = data.target # Labels are already available in data.target

# 4. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42 # Removed .T as X is already in correct shape
)

# 5. Create model
model = GaussianNB()

# 6. Train model
model.fit(X_train, y_train)

# 7. Predict
y_pred = model.predict(X_test)

# 8. Accuracy
acc = accuracy_score(y_test, y_pred)

print("Accuracy:", acc)
`;

export default function Page() {
  return (
    <div className="p-10">
      <Navbar />

      <h1 className="text-4xl font-bold mb-5 mt-10">Naive Bayes</h1>

      <CodeBlockThemed code={code} language="Python" />
    </div>
  );
}
