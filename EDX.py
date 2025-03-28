import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
from sklearn.metrics import mean_squared_error
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Load the credit data. df = pd.read_csv('credit.csv')
df = pd.read_csv('C:/Users/dubes/Documents/www/stephanedube/credit.csv')
df.head()

# The response variable will be 'Balance.'
x = df.drop('Balance', axis=1)
y = df['Balance']

# Identify categorical columns
categorical_columns = ['Gender', 'Student', 'Married', 'Ethnicity']

# Create a copy of the dataframe to avoid SettingWithCopyWarning
x_processed = x.copy()

# Explicitly one-hot encode categorical columns
for col in categorical_columns:
    # Create dummy variables
    dummies = pd.get_dummies(x_processed[col], prefix=col, drop_first=True)
    
    # Drop the original categorical column
    x_processed = x_processed.drop(col, axis=1)
    
    # Concatenate dummy variables
    x_processed = pd.concat([x_processed, dummies], axis=1)

# Split the processed dataframe
x_train_processed, x_test_processed, y_train, y_test = train_test_split(x_processed, y, test_size=0.2, random_state=42)

# Select numeric and encoded features
numeric_features = ['Income', 'Limit', 'Rating', 'Cards', 'Age', 'Education']
encoded_features = [col for col in x_train_processed.columns if any(col.startswith(cat) for cat in categorical_columns)]
all_features = numeric_features + encoded_features

# Fit a linear model using numeric and encoded features
model1 = LinearRegression().fit(x_train_processed[all_features], y_train)

# Report train and test R2 scores
train_score = model1.score(x_train_processed[all_features], y_train)
test_score = model1.score(x_test_processed[all_features], y_test)
print('Train R2:', train_score)
print('Test R2:', test_score)

# Print feature importances
feature_importance = pd.DataFrame({
    'feature': all_features,
    'importance': np.abs(model1.coef_)
})
print("\nFeature Importances:\n", feature_importance.sort_values('importance', ascending=False))
