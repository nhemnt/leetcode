<h2><a href="https://leetcode.com/problems/simplify-path">71. Simplify Path</a></h2><h3>Medium</h3><hr><p>Given an absolute path for a Unix-style file system, which begins with a slash <code>&#39;/&#39;</code>, transform this path into its <strong>simplified canonical path</strong>.</p>

<p>In Unix-style file system context, a single period <code>&#39;.&#39;</code> signifies the current directory, a double period <code>&quot;..&quot;</code> denotes moving up one directory level, and multiple slashes such as <code>&quot;//&quot;</code> are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like <code>&quot;...&quot;</code>) as valid names for files or directories.</p>

<p>The simplified canonical path should adhere to the following rules:</p>

<ul>
	<li>It must start with a single slash <code>&#39;/&#39;</code>.</li>
	<li>Directories within the path should be separated by only one slash <code>&#39;/&#39;</code>.</li>
	<li>It should not end with a slash <code>&#39;/&#39;</code>, unless it&#39;s the root directory.</li>
	<li>It should exclude any single or double periods used to denote current or parent directories.</li>
</ul>

<p>Return the new path.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">path = &quot;/home/&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;/home&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>The trailing slash should be removed.</p>
</div>

<div class="example-block">&nbsp;</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">path = &quot;/home//foo/&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;/home/foo&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>Multiple consecutive slashes are replaced by a single one.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">path = &quot;/home/user/Documents/../Pictures&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;/home/user/Pictures&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>A double period <code>&quot;..&quot;</code> refers to the directory up a level.</p>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">path = &quot;/../&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;/&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>Going one level up from the root directory is not possible.</p>
</div>
</div>

<p><strong class="example">Example 5:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">path = &quot;/.../a/../b/c/../d/./&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;/.../b/d&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p><code>&quot;...&quot;</code> is a valid name for a directory in this problem.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= path.length &lt;= 3000</code></li>
	<li><code>path</code> consists of English letters, digits, period <code>&#39;.&#39;</code>, slash <code>&#39;/&#39;</code> or <code>&#39;_&#39;</code>.</li>
	<li><code>path</code> is a valid absolute Unix path.</li>
</ul>
