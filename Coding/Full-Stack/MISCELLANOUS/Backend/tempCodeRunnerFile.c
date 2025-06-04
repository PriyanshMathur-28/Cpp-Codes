#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of processes: ");
    scanf("%d", &n);

    int burst[10], tat[10], obt[10];
    int tottat = 0, totwt = 0;

    printf("Enter burst time of each process:\n");
    for (int i = 0; i < n; i++) {
        printf("Enter burst time of P%d: ", i + 1);
        scanf("%d", &burst[i]);
        obt[i] = burst[i];
    }

    // Calculate Turnaround Time (TAT) and Waiting Time (WT)
      tat[0] = burst[0];
    tottat += tat[0];
    for (int i = 1; i < n; i++) {
        tat[i] = tat[i - 1] + burst[i];
        tottat += tat[i];
    }

    // Print TAT and WT, calculate totals
    printf("Process\tTAT\tWT\n");
    for (int i = 0; i < n; i++) {
        int wt = tat[i] - obt[i];
        totwt += wt;
        printf("P%d\t%d\t%d\n", i + 1, tat[i], wt);
    }

    // Print totals and averages
    printf("Total turn around time: %d\n", tottat);
    printf("Total waiting time: %d\n", totwt);
    printf("Average turn around time: %.2f\n", (float)tottat / n);
    printf("Average waiting time: %.2f\n", (float)totwt / n);

    return 0;
}