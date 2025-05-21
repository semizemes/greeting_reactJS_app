#!/bin/bash

# simple-interest.sh
# A basic script to calculate simple interest

echo "Enter Principal amount:"
read principal

echo "Enter Rate of Interest (per annum):"
read rate

echo "Enter Time (in years):"
read time

# Simple Interest Formula: (P × R × T) / 100
interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)

echo "Simple Interest = $interest"
