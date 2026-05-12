import Navbar from "@/components/Navbar";
import CodeBlockThemed from "@/components/CodeBlockThemed";
const code = `import numpy as np
import matplotlib.pyplot as plt

from sklearn.cluster import KMeans
from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler

# 1. Load dataset
data = load_breast_cancer()

y = data.target

# 2. Standardize data
scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)

# 3. Create KMeans model
model = KMeans(n_clusters=2, random_state=42)

# 4. Fit and predict
clusters = model.fit_predict(X_scaled)

# 5. Plot clusters
plt.scatter(
    X_scaled[:,0],
    X_scaled[:,1],
    c=clusters,
    cmap='viridis'
)

plt.title("K-Means Clustering")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")

plt.show()

# 6. Cluster centers
print(model.cluster_centers_)
`;

export default function Page() {
  return (
    <div className="p-10">
      <Navbar />

      <h1 className="text-4xl font-bold mb-5 mt-10">K-Means Clustering</h1>

      <CodeBlockThemed code={code} language="Python" />
    </div>
  );
}
