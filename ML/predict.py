import warnings
import itertools
import numpy as np
import matplotlib.pyplot as plt
warnings.filterwarnings("ignore")
plt.style.use('fivethirtyeight')
import pandas as pd
import statsmodels.api as sm
import matplotlib

matplotlib.rcParams['axes.labelsize'] = 14
matplotlib.rcParams['xtick.labelsize'] = 12
matplotlib.rcParams['ytick.labelsize'] = 12
matplotlib.rcParams['text.color'] = 'k'

# Reading File
df = pd.read_excel('Hospital3.xlsx')

# Data preprocessing
df = df.sort_values('Date')
df = df.groupby('Date')['Number of Patients'].sum().reset_index()

# Indexing with time series data
df = df.set_index('Date')
y = df['Number of Patients'].resample('MS').mean()

# To plot Number of patients graph
# y.plot(figsize=(15, 6))
# plt.show()

# Time series forecasting with ARIMA
mod = sm.tsa.statespace.SARIMAX(y,order=(1, 1, 1), seasonal_order=(1, 1, 0, 12), enforce_stationarity=False, enforce_invertibility=False)

results = mod.fit(disp=0)

# Producing and visualizing forecasts 
# steps = Number of months
pred_uc = results.get_forecast(steps=13)
pred_ci = pred_uc.conf_int()

ax = y.plot(label='observed', figsize=(14, 7))
pred_uc.predicted_mean.plot(ax=ax, label='Forecast')
ax.fill_between(pred_ci.index, pred_ci.iloc[:, 0], pred_ci.iloc[:, 1], color='k', alpha=.25)
ax.set_xlabel('Date')
ax.set_ylabel('Number of Patients')

# Print Values
print(pred_uc.predicted_mean)
pred_mean = (pred_uc.predicted_mean).values
print(pred_mean)
plt.legend()

# Save File
plt.savefig('hospital3.png')