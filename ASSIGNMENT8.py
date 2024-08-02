
# visualization.py
import pandas as pd
import matplotlib.pyplot as plt
from exceptions import DataCleaningError

def load_cleaned_data(file_path):
    try:
        df = pd.read_csv(file_path)
        return df
    except FileNotFoundError:
        raise DataCleaningError(f"File '{file_path}' not found.")
    except Exception as e:
        raise DataCleaningError(f"Error loading data from '{file_path}': {str(e)}")

def plot_total_cases(df):
    plt.figure(figsize=(10, 6))
    plt.plot(df['Date'], df['Confirmed'], label='Confirmed', marker='o')
    plt.plot(df['Date'], df['Deaths'], label='Deaths', marker='o')
    plt.plot(df['Date'], df['Recovered'], label='Recovered', marker='o')
    plt.title('Total Cases over Time')
    plt.xlabel('Date')
    plt.ylabel('Number of Cases')
    plt.grid(True)
    plt.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('total_cases.png')
    plt.close()

def plot_top_countries(df):
    top_countries = df.groupby('Country/Region')['Confirmed'].max().sort_values(ascending=False).head(10)
    plt.figure(figsize=(10, 6))
    top_countries.plot(kind='bar', color='skyblue')
    plt.title('Top 10 Countries/States with Highest Cases')
    plt.xlabel('Country/State')
    plt.ylabel('Number of Cases')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('top_countries.png')
    plt.close()

def plot_daily_cases(df):
    df['Daily_New_Cases'] = df['Confirmed'].diff()
    df['Growth_Rate'] = df['Daily_New_Cases'] / df['Confirmed'].shift() * 100
    plt.figure(figsize=(10, 6))
    plt.bar(df['Date'], df['Daily_New_Cases'], color='lightgreen', label='Daily New Cases')
    plt.plot(df['Date'], df['Growth_Rate'], color='orange', marker='o', label='Growth Rate (%)')
    plt.title('Daily New Cases and Growth Rate')
    plt.xlabel('Date')
    plt.ylabel('Count')
    plt.grid(True)
    plt.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('daily_cases.png')
    plt.close()

# dashboard.py
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
from visualization import load_cleaned_data, plot_total_cases, plot_top_countries, plot_daily_cases
from exceptions import DataCleaningError

def main():
    st.title('COVID-19 Data Visualization Dashboard')
    
   
    file_path = 'clean_covid_data.csv'
    try:
        df = load_cleaned_data(file_path)
    except DataCleaningError as e:
        st.error(f"Error loading cleaned data: {str(e)}")
        return
   
    st.sidebar.subheader('Visualization Options')
    visualization_choice = st.sidebar.selectbox('Select Visualization', ['Total Cases over Time', 'Top 10 Countries/States', 'Daily New Cases and Growth Rate'])
    
   
    if visualization_choice == 'Total Cases over Time':
        plot_total_cases(df)
        st.subheader('Total Cases over Time')
        st.image('total_cases.png')
    elif visualization_choice == 'Top 10 Countries/States':
        plot_top_countries(df)
        st.subheader('Top 10 Countries/States with Highest Cases')
        st.image('top_countries.png')
    elif visualization_choice == 'Daily New Cases and Growth Rate':
        plot_daily_cases(df)
        st.subheader('Daily New Cases and Growth Rate')
        st.image('daily_cases.png')

if __name__ == '__main__':
    main()
