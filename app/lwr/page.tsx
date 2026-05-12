import Navbar from "@/components/Navbar";
import CodeBlockThemed from "@/components/CodeBlockThemed";
const code = `import numpy as np
import matplotlib.pyplot as plt


from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split


# Load dataset


data = fetch_california_housing(as_frame=True)
df = data.frame


X = df['MedInc'].values.reshape(-1,1)
y = df['MedHouseVal'].values


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)


# LWR Function


def lwr(X_train, y_train, X_test, tau=0.1):


    preds = []


    for point in X_test:


        weights = np.exp(
            -np.sum((X_train - point)**2, axis=1) / (2 * tau**2)
        )


        Xb = np.c_[np.ones((X_train.shape[0],1)), X_train]


        theta, _, _, _ = np.linalg.lstsq(
            Xb * weights[:, np.newaxis],
            y_train * weights,
            rcond=None
        )


        point_b = np.c_[1, point]
        pred = point_b @ theta


        preds.append(pred)


    return np.array(preds)
`;


export default function Page() {
  return (
    <div className="p-10">
      <Navbar />

      <h1 className="text-4xl font-bold mb-5 mt-10">
        Locally Weighted Regression
      </h1>

      <CodeBlockThemed code={code} language="Python" />
    </div>
  );
}
