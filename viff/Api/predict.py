import warnings
import itertools
import numpy as np
import matplotlib.pyplot as plt
warnings.filterwarnings("ignore")
plt.style.use('fivethirtyeight')
import pandas as pd
import statsmodels.api as sm
import matplotlib
import sys

class Prediction:
    def run(self, fileName):
        matplotlib.rcParams['axes.labelsize'] = 14
        matplotlib.rcParams['xtick.labelsize'] = 12
        matplotlib.rcParams['ytick.labelsize'] = 12
        matplotlib.rcParams['text.color'] = 'k'

        # Reading File
        df = pd.read_excel(fileName)
        heartattack = df.loc[df['Disease'] == 'Heart Attack']
        diabetes = df.loc[df['Disease'] == 'Diabetes']
        lungcancer = df.loc[df['Disease'] == 'Lung Cancer']
        fever = df.loc[df['Disease'] == 'Fever']


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
        pred_uc = results.get_forecast(steps=12)
        pred_ci = pred_uc.conf_int()

        ax = y.plot(label='observed', figsize=(14, 7))
        pred_uc.predicted_mean.plot(ax=ax, label='Forecast')
        ax.fill_between(pred_ci.index, pred_ci.iloc[:, 0], pred_ci.iloc[:, 1], color='k', alpha=.25)
        ax.set_xlabel('Date')
        ax.set_ylabel('Number of Patients')

        # Print Values
        #print(pred_uc.predicted_mean)
        pred_mean = (pred_uc.predicted_mean).values
        #print(pred_mean)
        plt.legend()

        # Save File
        fileNameOnly, ext = fileName.split('.')
        plt.savefig(fileNameOnly + '.png', block=False)
        plt.close('all')

        # Heart Attack
        heartattack = heartattack.sort_values('Date')
        cols = ['Disease']
        heartattack.drop(cols, axis=1, inplace=True)
        heartattack = heartattack.groupby('Date')['Number of Patients'].sum().reset_index()

        # Indexing with time series data
        heartattack = heartattack.set_index('Date')
        ha = heartattack['Number of Patients'].resample('MS').mean()

        # To plot Number of patients graph
        # ha.plot(figsize=(15, 6))
        # plt.show()

        # Time series forecasting with ARIMA
        mod_ha = sm.tsa.statespace.SARIMAX(ha,order=(1, 1, 1), seasonal_order=(1, 1, 0, 12), enforce_stationarity=False, enforce_invertibility=False)

        results_ha = mod_ha.fit(disp=0)

        # Producing and visualizing forecasts 
        # steps = Number of months
        pred_uc_ha = results_ha.get_forecast(steps=12)
        pred_ci_ha = pred_uc_ha.conf_int()

        ax_ha = ha.plot(label='observed', figsize=(14, 7))
        pred_uc_ha.predicted_mean.plot(ax=ax_ha, label='Forecast')
        ax_ha.fill_between(pred_ci_ha.index, pred_ci_ha.iloc[:, 0], pred_ci_ha.iloc[:, 1], color='k', alpha=.25)
        ax_ha.set_xlabel('Date')
        ax_ha.set_ylabel('Heart Attack Patients')

        plt.legend()

        # Save File
        fileNameOnly, ext = fileName.split('.')
        plt.savefig(fileNameOnly + '_ha.png')
        plt.close()

        # Diabetes
        diabetes = diabetes.sort_values('Date')
        cols = ['Disease']
        diabetes.drop(cols, axis=1, inplace=True)
        diabetes = diabetes.groupby('Date')['Number of Patients'].sum().reset_index()

        # Indexing with time series data
        diabetes = diabetes.set_index('Date')
        dia = diabetes['Number of Patients'].resample('MS').mean()

        # To plot Number of patients graph
        # dia.plot(figsize=(15, 6))
        # plt.show()

        # Time series forecasting with ARIMA
        mod_dia = sm.tsa.statespace.SARIMAX(dia,order=(1, 1, 1), seasonal_order=(1, 1, 0, 12), enforce_stationarity=False, enforce_invertibility=False)

        results_dia = mod_dia.fit(disp=0)

        # Producing and visualizing forecasts 
        # steps = Number of months
        pred_uc_dia = results_dia.get_forecast(steps=12)
        pred_ci_dia = pred_uc_dia.conf_int()

        ax_dia = dia.plot(label='observed', figsize=(14, 7))
        pred_uc_dia.predicted_mean.plot(ax=ax_dia, label='Forecast')
        ax_dia.fill_between(pred_ci_dia.index, pred_ci_dia.iloc[:, 0], pred_ci_dia.iloc[:, 1], color='k', alpha=.25)
        ax_dia.set_xlabel('Date')
        ax_dia.set_ylabel('Diabetes Patients')

        plt.legend()

        # Save File
        fileNameOnly, ext = fileName.split('.')
        plt.savefig(fileNameOnly + '_dia.png')
        plt.close()

        # Lung Cancer
        lungcancer = lungcancer.sort_values('Date')
        cols = ['Disease']
        lungcancer.drop(cols, axis=1, inplace=True)
        lungcancer = lungcancer.groupby('Date')['Number of Patients'].sum().reset_index()

        # Indexing with time series data
        lungcancer = lungcancer.set_index('Date')
        lc = lungcancer['Number of Patients'].resample('MS').mean()

        # To plot Number of patients graph
        # lc.plot(figsize=(15, 6))
        # plt.show()

        # Time series forecasting with ARIMA
        mod_lc = sm.tsa.statespace.SARIMAX(lc,order=(1, 1, 1), seasonal_order=(1, 1, 0, 12), enforce_stationarity=False, enforce_invertibility=False)

        results_lc = mod_lc.fit(disp=0)

        # Producing and visualizing forecasts 
        # steps = Number of months
        pred_uc_lc = results_lc.get_forecast(steps=12)
        pred_ci_lc = pred_uc_lc.conf_int()

        ax_lc = lc.plot(label='observed', figsize=(14, 7))
        pred_uc_lc.predicted_mean.plot(ax=ax_lc, label='Forecast')
        ax_lc.fill_between(pred_ci_lc.index, pred_ci_lc.iloc[:, 0], pred_ci_lc.iloc[:, 1], color='k', alpha=.25)
        ax_lc.set_xlabel('Date')
        ax_lc.set_ylabel('Lung Cancer Patients')

        plt.legend()

        # Save File
        fileNameOnly, ext = fileName.split('.')
        plt.savefig(fileNameOnly + '_lc.png')
        plt.close()

        # Fever
        fever = fever.sort_values('Date')
        cols = ['Disease']
        fever.drop(cols, axis=1, inplace=True)
        fever = fever.groupby('Date')['Number of Patients'].sum().reset_index()

        # Indexing with time series data
        fever = fever.set_index('Date')
        fe = fever['Number of Patients'].resample('MS').mean()

        # To plot Number of patients graph
        # fe.plot(figsize=(15, 6))
        # plt.show()

        # Time series forecasting with ARIMA
        mod_fe = sm.tsa.statespace.SARIMAX(fe,order=(1, 1, 1), seasonal_order=(1, 1, 0, 12), enforce_stationarity=False, enforce_invertibility=False)

        results_fe = mod_fe.fit(disp=0)

        # Producing and visualizing forecasts 
        # steps = Number of months
        pred_uc_fe = results_fe.get_forecast(steps=12)
        pred_ci_fe = pred_uc_fe.conf_int()

        ax_fe = fe.plot(label='observed', figsize=(14, 7))
        pred_uc_fe.predicted_mean.plot(ax=ax_fe, label='Forecast')
        ax_fe.fill_between(pred_ci_fe.index, pred_ci_fe.iloc[:, 0], pred_ci_fe.iloc[:, 1], color='k', alpha=.25)
        ax_fe.set_xlabel('Date')
        ax_fe.set_ylabel('Lung Cancer Patients')

        plt.legend()

        # Save File
        fileNameOnly, ext = fileName.split('.')
        plt.savefig(fileNameOnly + '_fe.png')
        plt.close()



        sumVal = sum(pred_mean)
        return sumVal/100
if __name__ == "__main__":
    p = Prediction()
    fileName = sys.argv[1]
    p.run(fileName)