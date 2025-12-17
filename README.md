# Welcome to my Catan Project!

In this project, I worked to simulate the set-up phase and initial draft of Catan. In this process, I wrote a simulator in Python that leverages the minimiax algorithm of Chess engines, built a custom visualizer in React to see the considerations and decisions of the bot on a Catan board, and designed plots with R to analyze the results of 19,000 draft simulations.

## Paper

To read more about this project, check out the paper [here](https://docs.google.com/document/d/13b6yleHS4HqwgAKyNF6UWqSykOhDC1zawgXNLOkenHI/edit?usp=sharing).

This is still a work in progress overall, and I hope to continue expanding on my present work in the future.

## Simulator

The simulator code can be found in a Jupyter Notebook in `catan-simulator.ipynb`. To run it, make sure that you have the following packages installed in your jupyter kernel:

- Numpy
- Pandas

## Data

The data collected from 19,000 iterations of the simulator can be found in `catan-results.csv`.

## Visualizer

To run the visualizer, change directories into the `catan-visualizer` folder. Then, with `npm` and `node` installed, run the following commands:

1. `npm install`
2. `npm run dev`

This will give you a link to open the visualizer in your browser. You can then paste the JSON outputs from `catan-simulator.ipynb` into the bottom text box to walk through a particular simulation.

## Plots

The .png images of all plots can be found in the `plots/` directory. The R code for each of the plots can be found in `catan-exploration.rmd`.

## Contact

Thank you for checking out this project! If you have any ideas or suggestions, please reach out to ryan.fernandes@yale.edu, and I will try to respond as soon as possible!