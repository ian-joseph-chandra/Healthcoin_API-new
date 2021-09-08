import psutil
import time
import csv
import subprocess

cpu_log = [
    [
        "time(timestamp)",
        "cpu-usage-pid(%)",
        "cpu-usage-total(%)",
        "memory-usage-pid(Bytes)",
        "memory-usage-total(%)",
        "disk-io-utilization(B/s)",
    ]
]
test_info = []
run_status = "1"
process = None

with open("./result/test-info.txt", newline="") as txt:
    test_info = txt.readline().split(",")

cpu_memory_path = (
    "./result/" + test_info[0] + "-transactions/" + test_info[1] + "/cpu-memory-log.csv"
)


def check_run_status():
    global run_status
    run_status = open("./run-status.txt", "r").read()
    run_monitor()


def run_monitor():
    global process

    timestamp = int(round(time.time() * 1000))
    cpu_percentage_pid = process.cpu_percent() / psutil.cpu_count()
    memory_usage_pid = process.memory_info().rss
    cpu_percentage_total = psutil.cpu_percent()
    memory_usage_total_percentage = psutil.virtual_memory().percent

    try:
        disk_io = round(
            float(subprocess.check_output(["Powershell.exe", "./disk-io.ps1"])), 2
        )
    except subprocess.CalledProcessError as e:
        raise RuntimeError(
            "command '{}' return with error (code {}): {}".format(
                e.cmd, e.returncode, e.output
            )
        )

    append_list(
        timestamp,
        cpu_percentage_pid,
        cpu_percentage_total,
        memory_usage_pid,
        memory_usage_total_percentage,
        disk_io,
    )


def append_list(timestamp, cpu_pid, cpu_total, memory_pid, memory_total, disk_io):
    global cpu_log
    cpu_log.append([timestamp, cpu_pid, cpu_total, memory_pid, memory_total, disk_io])

    if len(cpu_log) > 5:
        append_csv()
        cpu_log.clear()


def append_csv():
    with open(cpu_memory_path, mode="a", newline="") as csvFile:
        filewriter = csv.writer(csvFile, delimiter=";")
        filewriter.writerows(cpu_log)


def main():
    pid_name = "node.exe"
    pid = None
    global process

    for proc in psutil.process_iter():
        if proc.name() == pid_name:
            pid = proc.pid
            break

    process = psutil.Process(pid)

    while run_status == "1":
        check_run_status()
    append_csv()

if __name__ == "__main__":
    main()
